import React, { useRef, useEffect } from "react";

import { Modalize } from "react-native-modalize";
import theme from "../../Global/styles/theme";

import { ModalButton, ModalTextButton, Title } from "./styles";

type Props = {
  isModalVisible: boolean;
  handleNextActivity: (isUserAnswer: boolean) => void;
  isUserAnswer: boolean;
};

export function ActivityStatusModal({
  isModalVisible,
  handleNextActivity,
  isUserAnswer,
}: Props): JSX.Element {
  const modalizeRef = useRef<Modalize>(null);

  function onOpen(): void {
    modalizeRef.current?.open();
  }

  function onClose(): void {
    modalizeRef.current?.close();
  }

  useEffect(() => {
    if (isModalVisible) {
      onOpen();
      return;
    }
    onClose();
  }, [isModalVisible]);

  return (
    <Modalize
      alwaysOpen={130}
      ref={modalizeRef}
      modalStyle={{
        backgroundColor: theme.colors.secondary,
        borderRadius: 16,
        padding: 20,
      }}
    >
      <Title>Ótimo código!</Title>

      <ModalButton onPress={() => handleNextActivity(isUserAnswer)}>
        <ModalTextButton>Continuar</ModalTextButton>
      </ModalButton>
    </Modalize>
  );
}
