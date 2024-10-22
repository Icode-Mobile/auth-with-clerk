import { SignedIn, SignedOut, useClerk, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Page() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <View
      style={{
        backgroundColor: '#222',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          color: '#fff',
        }}
      >
        Seja bem vindo
      </Text>
      <SignedIn>
        <Text
          style={{
            color: '#eb9534',
            fontSize: 16,
          }}
        >
          Olá, {user?.emailAddresses[0].emailAddress}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#9a62f5',
            width: 180,
            height: 35,
            marginTop: 8,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 80,
          }}
          onPress={() =>
            signOut({
              redirectUrl: '/(auth)/sign-in',
            })
          }
        >
          <Text
            style={{
              color: '#9a62f5',
              fontSize: 16,
            }}
          >
            Sair
          </Text>
        </TouchableOpacity>
      </SignedIn>
      <SignedOut>
        <Link
          style={{
            color: '#34a8eb',
            marginVertical: 8,
          }}
          href='/sign-in'
        >
          <Text
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}
          >
            Entrar
          </Text>
        </Link>
        <Link
          style={{
            color: '#7e40e3',
          }}
          href='/sign-up'
        >
          <Text
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}
          >
            Me cadastrar
          </Text>
        </Link>
      </SignedOut>
    </View>
  );
}
