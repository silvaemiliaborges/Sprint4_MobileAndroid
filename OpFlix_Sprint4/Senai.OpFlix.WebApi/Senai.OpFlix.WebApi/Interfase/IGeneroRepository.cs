using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfase
{
    public interface IGeneroRepository
    {
        List<Generos> Listar();

        void Cadastrar(Generos genero);

        Generos BuscarPorId(int id);

        void Atualizar(Generos genero);

        void Deletar(int id);
    }
}

