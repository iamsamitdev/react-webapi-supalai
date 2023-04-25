using System;
using System.Collections.Generic;

namespace backendapi.Models;

public partial class User
{
    public int UserID { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string EmailID { get; set; } = null!;

    public DateTime? DateOfBirth { get; set; }

    public string Password { get; set; } = null!;

    public bool IsEmailVerified { get; set; }

    public Guid ActivationCode { get; set; }

    public string? Address { get; set; }
}
