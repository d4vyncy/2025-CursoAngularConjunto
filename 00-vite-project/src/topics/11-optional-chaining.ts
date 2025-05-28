export interface Passenger{
    name:string;
    children?:string[];

}

const passenger1: Passenger={
    name: 'David',
    
}

const passenger2: Passenger={
    name: 'Luly',
    children:['Ian'],
}

const retunrChildrenNumber = (passenger:Passenger): number =>{
    //const howManyChildren= passenger.children?.length || 0;

    if(!passenger.children) return 0;

    const howManyChildren= passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

retunrChildrenNumber(passenger1);