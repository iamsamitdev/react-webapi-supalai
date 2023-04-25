using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace backendapi.Models.Extended;

[ModelMetadataType(typeof(UserMetadata))]
public class UserAuth
{
    [Required(AllowEmptyStrings = false, ErrorMessage = "ป้อนอีเมล์ก่อน")]
    [DataType(DataType.EmailAddress)]
    [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "รูปแบบอีเมล์ไม่ถูกต้อง")]
    public string EmailID { get; set; } = null!;

    [DataType(DataType.Password)]
    [Required(AllowEmptyStrings = false, ErrorMessage = "ป้อนรหัสผ่านก่อน")]
    public string Password { get; set; } = null!;
    
}