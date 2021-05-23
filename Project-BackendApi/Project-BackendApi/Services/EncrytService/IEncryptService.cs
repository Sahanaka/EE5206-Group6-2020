using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_BackendApi.Services.EncrytService
{
    public interface IEncryptService
    {
        public string Encryptword(string Encryptval);
        public string Decryptword(string DecryptText);
    }
}
