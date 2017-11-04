using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using app_angular_netcore.Models;

namespace app_angular_netcore.Controllers
{
    [Produces("application/json")]
    [Route("api/Message")]
    public class MessageController : Controller
    {
        static List<Models.Message> messages = new List<Models.Message>{
                new Message { Owner = "Pedro", Text = "El texto de Pedro" },
                new Message { Owner = "Reinaldo", Text = "Wajajja" }
            };


        public IEnumerable<Models.Message> Get()
        {
            return messages;
        }

        [HttpPost]
        public void Post([FromBody] Models.Message message)
        {
            messages.Add(message);
        }
    }
}