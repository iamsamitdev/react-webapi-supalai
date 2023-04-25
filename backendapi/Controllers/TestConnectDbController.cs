using backendapi.Models;
using Microsoft.AspNetCore.Mvc;
namespace backendapi.Controllers;
[ApiController]
[Route("[controller]")]
public class TestConnectDbController : Controller
{
    // GET
    // Test Connection DB
    [HttpGet]
    public string TestConnectDb()
    {
        // Create DBContext
        InventoryDBContext dbContextOld = new InventoryDBContext();
        
        if(dbContextOld.Database.CanConnect())
        {
            return "Connect DB Success";
        }
        else
        {
            return "Connect DB Fail";
        }
    }
}