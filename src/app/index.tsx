import React from 'react';
import { Redirect } from 'expo-router';

export default function IndexPage() {
  return <Redirect href={'/(public)/dashboard'} />;
}
