import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { AreaTotal, TextLoad } from './styled';


export default function LoadingFull({open}) {

  return (
        <>
            {open && 
                <AreaTotal>
                    <ActivityIndicator size="large" color="#E83151" />
                    <TextLoad>carregando...</TextLoad>
                </AreaTotal>
            }
        </>
  );
}