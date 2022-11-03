import React, { Component, useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const Register = ({ navigation }) => {
    const auth = getAuth()

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    function onSignUp() {
        console.log(name, email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                navigation.navigate('Landing')
            })
            .catch((err) => console.log(err))
    }

    return (
        <View>
            <TextInput
                placeholder="name"
                onChangeText={(name) => {
                    setName(name)
                }}
            />
            <TextInput
                placeholder="email"
                onChangeText={(email) => {
                    setEmail(email)
                }}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => {
                    setPassword(password)
                }}
            />

            <Button onPress={() => onSignUp()} title="Sign Up" />
        </View>
    )
}

// export class Register extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             email: '',
//             password: '',
//             name: '',
//         }

//         this.onSignUp = this.onSignUp.bind(this)
//     }

//     // onSignUp() {
//     //     const { email, password, name } = this.state

//     //     createUserWithEmailAndPassword(auth, email, password)
//     //         .then((result) => console.log(result))
//     //         .catch((err) => console.log(err))
//     // }

//     render() {
//         return (
//             <View>
//                 <TextInput
//                     placeholder="name"
//                     onChangeText={(name) => {
//                         this.setState({ name })
//                     }}
//                 />
//                 <TextInput
//                     placeholder="email"
//                     onChangeText={(email) => {
//                         this.setState({ email })
//                     }}
//                 />
//                 <TextInput
//                     placeholder="password"
//                     secureTextEntry={true}
//                     onChangeText={(password) => {
//                         this.setState({ password })
//                     }}
//                 />

//                 <Button onPress={() => this.onSignUp()} title="Sign Up" />
//             </View>
//         )
//     }
// }

export default Register
