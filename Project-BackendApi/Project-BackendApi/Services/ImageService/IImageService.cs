using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Project_BackendApi.Services.ImageService
{
    public interface IImageService
    {
        Task<string> SaveImage(IFormFile imageFile);

        void DeleteImage(String imageName);
    }
}
