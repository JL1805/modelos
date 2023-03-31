import {  Prisma  } from '@prisma/client'
import { insertRole, selectRole } from './controllers/roles'
import { inserMenu, selectMenu } from './controllers/menus';
import { insertRoleMenu, selectRoleMenu } from './controllers/rel_role_menu';
import { inserPersona, selectPersona } from './controllers/personas';


const create_rol : Prisma.catrolesCreateInput = {
    vrole: 'Nuevo rol 2',
    vdescription: 'Descripción del nuevo rol 2',
    ishowclient: 1,
    iactivo: 1,
}


const crearRol = async () => {
    try{
        const resp = await insertRole(create_rol);
    }catch(err : any){
        console.log("Error al insertar el registro: Codigo de error: "+ err.code)
        console.log(JSON.stringify(err))
    }
}


const select_rol : Prisma.catrolesWhereUniqueInput = {
    iroleid : 1
}

const seleccionarRol = async () => {
    try{
        const resp = await selectRole (select_rol);
        if(!resp) return;
    }catch(err : any){
        console.log("Error al seleccionar el registro: Codigo de error: "+ err.code)
        console.log(JSON.stringify(err))
    }
    selectRole
}




const create_menu : Prisma.catmenusCreateInput = {
    iorden : 2,
    vNombreMenu : 'UN MENU 2',
    vdescripcion : 'UNA DESCRIPCION 2'
}


const insertarMenu = async () => {
    try{
        const resp = await inserMenu(create_menu);
    }catch(err : any){
        console.log("Error al insertar el registro: Codigo de error: "+ err.code)
        console.log(JSON.stringify(err))
    }
}


const select_menu : Prisma.catmenusWhereUniqueInput = {
    imenuid : 1
}

const seleccionarMenu = async () => {
    try{
        const resp = await selectMenu(select_menu);
        if(!resp) return;
    }catch(err : any){
        console.log("Error al seleccionar el registro: Codigo de error: "+ err.code)
        console.log(JSON.stringify(err))
    }

}

//const create_menu_rol : Prisma.rel_rolemenuCreateManyInput = {
const create_menu_rol : Prisma.rel_rolemenuCreateInput = {
    // iroleid:1,
    // imenuid:2
    role: {
        connect :{
            iroleid :2
        }
    },
    menu: {
        connect :{
            imenuid :1
        }
    }

}

const insertarMenuRol = async () => {
    try{
        const resp = await insertRoleMenu(create_menu_rol);
        console.log(resp)
    }catch(err : any){
        console.log("Error al insertar el registro: Codigo de erroree: "+ err.code)
        console.log(JSON.stringify(err))
    }

}

const select_menu_rol : Prisma.rel_rolemenuFindManyArgs = {
    where:{
        irolemenuid:1
    },
    include:{
        menu : true,
        role:  true
    }
}

const seleccionarMenuRol = async () => {
    try{
        const resp = await selectRoleMenu(select_menu_rol);
        if(!resp) return;
        console.log(resp)
    }catch(err : any){
        console.log("Error al seleccionar el registro: Codigo de error: "+ err.code)
        console.log(JSON.stringify(err))
    }

}




    const create_persona : Prisma.catpersonasCreateInput = {
        vnombres : 'Jose Luis',
        vapellidos:' Villalobos Ramirez',
        vcelular:'6987451223'
    }
    
    const insertarPersona = async () => {
        try{
            const resp = await inserPersona(create_persona);
            console.log(resp)
        }catch(err : any){
            console.log("Error al insertar el registro: Codigo de erroree: "+ err.code)
            console.log(JSON.stringify(err))
        }
    
    }
    
    const select_persona : Prisma.catpersonasFindManyArgs = {
        where:{
            ipersonaid : 1
        }
    }
    
    const seleccionarPersona = async () => {
        try{
            const resp = await selectPersona(select_persona);
            console.log(resp)
        }catch(err : any){
            console.log("Error al seleccionar el registro: Codigo de error: "+ err.code)
            console.log(JSON.stringify(err))
        }
    
    }


//crearRol();
//seleccionarRol();

//insertarMenu();
//seleccionarMenu();

//seleccionarMenuRol();
//insertarMenuRol();

//seleccionarPersona();
//insertarPersona();