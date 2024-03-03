package com.proyecto.resouceserver.controller;

import com.proyecto.resouceserver.entidades.ProductoModelo;
import com.proyecto.resouceserver.servicio.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/producto")
public class ProController {
    @Autowired
    public ProductoService productoService;


    @PostMapping("/enviar")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ProductoModelo productoModelo(@RequestBody ProductoModelo productoModelo){
        return productoService.guardar(productoModelo);
    }
}
