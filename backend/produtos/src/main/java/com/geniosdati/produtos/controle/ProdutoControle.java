package com.geniosdati.produtos.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.geniosdati.produtos.model.ProdutoModelo;
import com.geniosdati.produtos.model.RespostaModelo;
import com.geniosdati.produtos.service.ProdutoService;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoControle {

   @Autowired
   private ProdutoService service;

   @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm){
        return service.cadastrarAlterar(pm,"cadastrar");
     }

     @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm){
        return service.cadastrarAlterar(pm,"alterar");
     }
   

     @GetMapping("/produtos")
    public Iterable<ProdutoModelo> listarProdutos(){
        return service.findAllproduto();
    } 

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable Long id){
        return service.remover(id);

    }

   
    @GetMapping("/")
    public String rota(){
        return "Api de produtos funcionando";
    }
    
}
