import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#d2d2d2',
    },
    upView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: 250,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableView: {
        width: '80%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27ae60',

    },
    text: {
        fontSize: 25,
        color: '#000000'
    }
})

export default styles