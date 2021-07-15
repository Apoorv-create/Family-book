var images=
["mf.jpg", "My%photo.jpg", "a.jpg", "mf.jpg"];
var names =
[Family, me, mom, dad];
var i = 0;
function update()
{
    i++
    var number_family_members_array=4;
    if(i > number_family_members_array)
    {
        i=0;
    }
    var updateimage= images[i];
    var updatename= names[i];
    document.getElementById("imagefam").src= updateImage;
    document.getElementById("name_of_family_member").innerHTML= updateName;
}