package com.geniosdati.produtos.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.geniosdati.produtos.model.ProdutoModelo;

@Repository
public interface ProdutoRepository extends CrudRepository<ProdutoModelo, Long>{

    
    
}
