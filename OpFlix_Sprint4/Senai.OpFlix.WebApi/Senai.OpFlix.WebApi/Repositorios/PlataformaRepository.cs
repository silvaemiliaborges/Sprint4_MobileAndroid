using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositorios
{
    public class PlataformaRepository : IPlataformaRepository
    {
        public void Ataulizar(Plataformas plataforma)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                Plataformas PlataformaBuscada = ctx.Plataformas.FirstOrDefault(x => x.IdPlataforma == plataforma.IdPlataforma);
                PlataformaBuscada.Nome = plataforma.Nome;
                ctx.Plataformas.Update(PlataformaBuscada);
                ctx.SaveChanges();
            }
        }

        public Plataformas BuscarPorId(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Plataformas.Find(id);
            }
        }

        public void Cadastrar(Plataformas plataforma)
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                ctx.Plataformas.Add(plataforma);
                ctx.SaveChanges();
            }
        }

        public void Deletar(int id)
        {
            using (OpFlixContext ctx = new OpFlixContext())
                {
                Plataformas plataforma = ctx.Plataformas.Find(id);
                ctx.Plataformas.Remove(plataforma);
                ctx.SaveChanges();
            }
        }

        public List<Plataformas> Listar()
        {
            using (OpFlixContext ctx = new OpFlixContext())
            {
                return ctx.Plataformas.ToList();
            }
        }
    }
}
