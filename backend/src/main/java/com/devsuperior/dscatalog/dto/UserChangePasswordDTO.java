package com.devsuperior.dscatalog.dto;

import java.io.Serializable;

public class UserChangePasswordDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String password;

    public UserChangePasswordDTO() {
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}