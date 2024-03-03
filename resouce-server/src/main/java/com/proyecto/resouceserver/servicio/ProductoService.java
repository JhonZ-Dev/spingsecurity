package com.proyecto.resouceserver.servicio;

import com.proyecto.resouceserver.entidades.ProductoModelo;
import com.proyecto.resouceserver.repositorios.ProdcutoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {
    @Autowired
    private ProdcutoRepo repo;

    public ProductoModelo guardar(ProductoModelo productoModelo){
        return repo.save(productoModelo);
    }
}
