package com.springcrud.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springcrud.crud.model.User;
import org.springframework.stereotype.Repository;


public interface UserDao extends JpaRepository<User, Long> {	

}
