'use server';

import { redirect } from 'next/navigation';

export async function submitContactForm(prevState: { message: string | null }, formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data to the console.
  console.log('New contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);
  
  // You can perform validation here and return an error message if needed
  if (!name || !email || !message) {
    return { message: 'Please fill out all required fields.' };
  }

  // Redirect to the thank you page on successful submission
  redirect('/thank-you');
}
