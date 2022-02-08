package com.devsuperior.dscatalog.repositories;

import com.devsuperior.dscatalog.entities.Category;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("SELECT DISTINCT obj "
            + "FROM Category obj "
            + "WHERE (:name IS NULL OR LOWER(obj.name) LIKE LOWER(CONCAT('%', :name, '%')))")
    Page<Category> find(String name, Pageable pageable);
}
