import {connectToDB} from './utils';
import {Post, User} from './models';
// // const posts =[
// //     {id:1, title:"Post-1", body:"....", userId:1},
// //     {id:2, title:"Post-2", body:"....", userId:1},
// //     {id:3, title:"Post-3", body:"....", userId:2},
// //     {id:4, title:"Post-4", body:"....", userId:3},
// //     {id:5, title:"Post-5", body:"....", userId:4},
// // ];

export const getPosts= async()=>{
    try {
        connectToDB();
        const posts = await Post.find()
        return posts;
        console.log(posts)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
};

export const getPost = async(slug)=>{
    try{
        connectToDB();
        const post = await Post.find({slug});
        return post;
    }catch(error){
        console.log(error)
        throw new Error("Failed")
    }

    
};

export const getUser = async(id)=>{
    try {
        connectToDB();
        const user = await User.findById(id) 
        return user
    } catch (error) {
        throw new Error("Failed to fetched")
    }
};

export const getUsers = async()=>{
    try {
        connectToDB();
        const users = await User.findById() 
        return users
    } catch (error) {
        throw new Error("Failed to fetched")
    }
};