function vehicle(mk,mdl,noofwhls,rgno)
{
    this.make=mk;
    this.model=mdl;
    this.noofwheels=noofwhls;
    this.regno=rgno;
}

DispCar();

function DispCar()
{
var car=new vehicle();
car.make="Honda";
car.model="2000";
var noofsearts=6;
car.noofwheels=4;
var isceden="No";
car.regno='HGE RT3'
var dispValue='Make: '+car.make+ '\n'+' Model: '+car.model+'\n'+'RegNo: ' +car.regno+'\n'+'NoOfseats: ' + noofsearts +'\n'+'NoofWheels: '+ car.noofwheels +'\n'+'IsCedenType: '+ isceden;
document.getElementById('divDisp').innerText=dispValue;

console.log(car);
}
