using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositorios
{
    public class GeneroRepository : IGeneroRepository
    {

        public Generos BuscarPorId(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Generos.Find(id);
            }
        }

        public void Cadastrar(Generos genero)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                ctx.Generos.Add(genero);
                ctx.SaveChanges();

            }
        }

        public List<Generos> Listar()
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Generos.ToList();
            }
        }

        public void Atualizar(Generos genero)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Generos GeneroBuscado = ctx.Generos.FirstOrDefault(x => x.IdGenero == genero.IdGenero);
                GeneroBuscado.Nome = genero.Nome;
                ctx.Generos.Update(GeneroBuscado);
                ctx.SaveChanges();
            }
        }
        public void Deletar(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Generos genero = ctx.Generos.Find(id);
                ctx.Generos.Remove(genero);
                ctx.SaveChanges();
            }
        }
    }
}


