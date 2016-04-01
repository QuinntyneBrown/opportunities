namespace Chloe.Server.Models
{
    public class Person: BaseEntity
    {
        public string EmailAddress { get; set; }
        public string MobilePhoneNumber { get; set; }
        public string OfficePhoneNumber { get; set; }
    }
}