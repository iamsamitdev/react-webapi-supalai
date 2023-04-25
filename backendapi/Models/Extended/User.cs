using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace backendapi.Models;

[ModelMetadataType(typeof(UserMetadata))]
public partial class User
{
    
}

public class UserMetadata
{
    [Required(AllowEmptyStrings = false, ErrorMessage = "ป้อนชื่อก่อน")]
    public string FirstName { get; set; } = null!;

    [Required(AllowEmptyStrings = false, ErrorMessage = "ป้อนสกุลก่อน")]
    public string LastName { get; set; } = null!;

    [Required(AllowEmptyStrings = false, ErrorMessage = "ป้อนอีเมล์ก่อน")]
    [DataType(DataType.EmailAddress)]
    [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "รูปแบบอีเมล์ไม่ถูกต้อง")]
    public string EmailID { get; set; } = null!;

    [DataType(DataType.Date)]
    [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
    [Required(AllowEmptyStrings = false, ErrorMessage = "ป้อนวันเกิดก่อน")]
    public DateTime? DateOfBirth { get; set; }

    [DataType(DataType.Password)]
    [Required(AllowEmptyStrings = false, ErrorMessage = "ป้อนรหัสผ่านก่อน")]
    public string Password { get; set; } = null!;
}