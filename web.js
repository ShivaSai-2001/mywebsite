function message()
{
    var name = document.myform.Name.value;
    var email = document.myform.Email.value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndex(".");

    if(name == null || name == "")
    {
        return false;
    }
    if(atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length)
    {
        return false;
    }
}