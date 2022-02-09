package com.devsuperior.dscatalog.repositories;

import java.util.List;

import com.devsuperior.dscatalog.entities.Role;
import com.devsuperior.dscatalog.entities.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    @Query("SELECT DISTINCT obj "
            + "FROM User obj "
            + "INNER JOIN obj.roles rols "
            + "WHERE (COALESCE(:roles) IS NULL OR rols IN :roles) "
            + "AND (:firstName IS NULL OR LOWER(obj.firstName) LIKE LOWER(CONCAT('%', :firstName, '%')))")
    Page<User> find(List<Role> roles, String firstName, Pageable pageable);

    @Query("SELECT obj FROM User obj JOIN FETCH obj.roles WHERE obj IN :users")
    List<User> findUsersWithRoles(List<User> users);
}
