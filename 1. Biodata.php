<?php
//by Radendy Bahtiar - Sept, 21st '19

//Tujuan menggunakan PHP untuk output data adalah agar file dapat dibaca dengan format json tanpa menggunakan library lain di browser

//string data type
$name = 'Radendy Hafizh Bahtiar';

//integer data type
$age = 19;

//string data type
$address = 'Jl. Cempaka RT 02 RW 01 Tritih Lor, Kec. Jeruklegi 53252, Kab. Cilacap, Jawa Tengah';

//array data type
$hobbies = array('Reading', 'play game', 'watch movie', 'learn new things', 'vacation');
$school = array('SMK MIGAS Cilacap', 'Tahun : 2015 - 2018', 'Major : Teknik Perminyakan');

//array of object data type
$skillArr = array('0'=>'HTML5, CSS, JS, PHP, MySQL, Ms. Office, AutoCAD, Illustrator, Forklift & Excavator Operator (Beginner). Photoshop, Computer Maintenance, Networking, Typing, English (Intermediate). Gaming (Advanced)');
$skill = new ArrayObject($skillArr);

//convert output to json format
function myBio($strName, $strAge, $strAddress, $strHobbies, $strMarried, $strSchool, $strSkill, $strInterest_in_Coding){
    $json = array(
        'strName' => $strName,
        'strAge' => $strAge,
        'strAddress' => $strAddress,
        'strHobbies' => $strHobbies,
        'strMarried' => ($strMarried = FALSE)? 'Menikah': 'Belum menikah',
        'strSchool' => $strSchool,
        'strSkill' => $strSkill,
        'strInterest_in_Coding' => ($strInterest_in_Coding = TRUE)? 'Yes' : 'No'
    );
    return json_encode($json);
}

//output syntax
echo myBio($name, $age, $address, $hobbies, TRUE, $school, $skill[0], FALSE);

?>
