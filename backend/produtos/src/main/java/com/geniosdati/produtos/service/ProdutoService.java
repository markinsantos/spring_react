package com.geniosdati.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.geniosdati.produtos.model.ProdutoModelo;
import com.geniosdati.produtos.model.RespostaModelo;
import com.geniosdati.produtos.repository.ProdutoRepository;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    @Autowired
    private RespostaModelo rm;
    

        // retorna todos os produtos
    public Iterable<ProdutoModelo> findAllproduto(){
        return repository.findAll();
    }

    public ResponseEntity<?> cadastrarAlterar(ProdutoModelo produtoModelo, String tipo){
       
        if(produtoModelo.getNome().equals("")){
            rm.setMsg("o nome é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if(produtoModelo.getMarca().equals("")){
            rm.setMsg("o nome da marca é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else{
            if(tipo.equals("cadastrar")){
                return new ResponseEntity<ProdutoModelo>(repository.save(produtoModelo), HttpStatus.CREATED);
            }else{
                return new ResponseEntity<ProdutoModelo>(repository.save(produtoModelo), HttpStatus.OK);
            }
        }
        
    }

    public ResponseEntity<RespostaModelo> remover(Long id){
        repository.deleteById(id);
        rm.setMsg("O produto foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
        
    }
    
}
