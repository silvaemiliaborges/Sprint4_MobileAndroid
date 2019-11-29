using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfase;
using Senai.OpFlix.WebApi.Repositorios;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]

    public class GeneroController : ControllerBase
    {
        private IGeneroRepository GeneroRepository { get; set; }

        public GeneroController()
        {
            GeneroRepository = new GeneroRepository();
        }

        [Authorize(Roles = "Administrador")]

        [HttpGet]

        public IActionResult Listar()
        {
            return Ok(GeneroRepository.Listar());
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                Generos genero = GeneroRepository.BuscarPorId(id);
                if (genero == null)
                    return NotFound();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar(Generos genero)
        {
            // try
            //{
            //  int IdGenero = Convert.ToInt32(HttpContext.User.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
            //     genero.IdGenero = IdGenero;
            //    genero.Nome = ToString();
            //     GeneroRepository.Cadastrar(genero);
            //   return Ok();
            // }
            //catch (System.Exception ex)
            // {
            //   return BadRequest(new { mensagem = ex.Message });
            // }


            try
            {
                GeneroRepository.Cadastrar(genero);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Eita, erro: " + ex.Message });
            }


            //using (OpFlixContext ctx = new OpFlixContext())
            //{
            //    Generos GenerosBuscada = ctx.Generos.FirstOrDefault(x => x.IdCategoria == categoria.IdCategoria);
            //    // update categorias set nome = @nome
            //    GenerosBuscada.Nome = genero.Nome;
            //    // insert - add, delete - remove, update - update
            //    ctx.Generos.Update(GenerosBuscada);
            //    // efetivar
            //    ctx.SaveChanges();
            //}
        }
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            GeneroRepository.Deletar(id);
            return Ok();
        }

        [Authorize(Roles = "Administrador")]

        [HttpPut]
        public IActionResult Atualizar(Generos genero)
        {
            try
            {
                
                Generos GeneroBuscado = GeneroRepository.BuscarPorId(genero.IdGenero);
                if (GeneroBuscado == null)
                    return NotFound();
                GeneroRepository.Atualizar(genero);
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Meu amigo, não foi" });
            }
        }


    }
}

