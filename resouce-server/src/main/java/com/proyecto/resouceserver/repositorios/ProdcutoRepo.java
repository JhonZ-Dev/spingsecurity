package com.proyecto.resouceserver.repositorios;

import com.proyecto.resouceserver.entidades.ProductoModelo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdcutoRepo extends JpaRepository<ProductoModelo, Long> {

}
