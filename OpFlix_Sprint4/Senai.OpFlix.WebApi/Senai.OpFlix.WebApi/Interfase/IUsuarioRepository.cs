using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfase
{
    public interface IUsuarioRepository
    {
        List<Usuarios> Listar();
        void Cadastrar(Usuarios usuario);

        Usuarios BuscarPorEmailESenha(LoginViewModel login);

        
    }
}
