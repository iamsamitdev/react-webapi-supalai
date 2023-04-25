using backendapi.Models;
using backendapi.Models.Extended;
using Microsoft.AspNetCore.Mvc;

namespace backendapi.Controllers;

[ApiController]
[Route("[controller]")]
public class Authentication : ControllerBase
{
    // Register a new user
    [HttpPost]
    [Route("Register")]
    public async Task<IActionResult> Register([FromBody] User user)
    {
        // Validate the user
        if(ModelState.IsValid)
        {
            // Save the user
            await using (InventoryDBContext dbContextOld = new InventoryDBContext())
            {
                dbContextOld.Users.Add(user);
                dbContextOld.SaveChanges();
            }
            
            // Return the user
            return Ok(user);
        }
        else
        {
            // Return status code 400
            return BadRequest(ModelState);
        }
    }
    
    
    // Login a user
    [HttpPost]
    [Route("Login")]
    public IActionResult Login(UserAuth user)
    {
        // Validate Email and Password
        if (user.EmailID != null && user.Password != null)
        {
            // check if the user exists
            using (InventoryDBContext dBContext = new InventoryDBContext())
            {
                var query = dBContext.Users.Where(u => u.EmailID == user.EmailID).FirstOrDefault();
                if (query != null)
                {
                    if(string.Compare(user.Password, query.Password) == 0)
                    {
                        return Ok(query);
                    }
                    else
                    {
                        return BadRequest(ModelState);
                    }
                }
            }
        }
        else
        {
            return BadRequest(ModelState);
        }
        
        return BadRequest(ModelState);
    }
}