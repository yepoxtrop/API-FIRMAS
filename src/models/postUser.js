export async function postUser(data,userFolder,models){
    try {
        console.log(data);
        return await userFolder(data,models);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
    }
}