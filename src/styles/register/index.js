import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },
    topSection: {
        flex: .5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    bottomSection: {
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
    },
    RegisterText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: -400,
        marginTop: 55,
        marginBottom:-100,
        justifyContent: 'center',
        display: 'block'
    },
    secondSection: {

        flex: 1,
        backgroundColor: '#FFF',
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    label: {
        color: '#ccc',

    },
    textInput: {
        color: '#000',
        padding: 8
    },
    forgotPassword: {
        color: '#000',
        textAlign: 'right'
    },
    button: {
        backgroundColor: '#750B50',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        
    },
    buttonImg: {
        //backgroundColor: '#750B50',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        width:150,
        borderColor: '#750B50',
        shadowColor: '#750B50'
        
    },
    buttonTextImg: {
        color: '#750B50',
        fontWeight: 'bold'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    spacing: {
        marginTop: 15,
        //padding: 10,
        display: 'block'

    },
    spacingImg: {
        marginTop: 15,
        //padding: 10,
        display: 'block',
        flexDirection: "row",
        justifyContent: 'center'

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    singIn: {
        color: '#750B50',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    imagenUser:{
        width:110,
        height:110,
        borderRadius: 400/ 2
    }
})