import React from 'react';

export default function EmptyItems({ isAuth }: { isAuth: boolean }) {
  return (
    <div>
      {isAuth ? <p>Вы пока ничего не дабавили!</p> : <p>Здесь пусто! Войдите в свой аккаунт!</p>}
    </div>
  );
}
