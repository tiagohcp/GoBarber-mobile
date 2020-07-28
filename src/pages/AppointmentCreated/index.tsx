import React, { useEffect, useCallback, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface RouteParams {
  provider_id: string;
  date: number;
}

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const [provider, setProvider] = useState<Provider>();

  const routeParams = params as RouteParams;

  useEffect(() => {
    api.get('providers').then(response => {
      const appointmentProvider = response.data.filter(
        ({ id }) => id === routeParams.provider_id,
      );
      if (appointmentProvider.length > 0) {
        setProvider(appointmentProvider[0]);
      }
    });
  }, [routeParams.provider_id]);

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formattedAppointmentConfirmation = useMemo(() => {
    const dayOfWeek = format(routeParams.date, "cccc'-feira'", {
      locale: ptBR,
    });
    return format(
      routeParams.date,
      `'${
        dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
      }, dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h com ${provider?.name}'`,
      { locale: ptBR },
    );
  }, [provider?.name, routeParams.date]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>
      <Description>{formattedAppointmentConfirmation}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
