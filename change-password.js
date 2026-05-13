#!/usr/bin/env node
// Admin Password Change Script
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function changePassword() {
  console.log('\n🔐 Admin Password Change\n');
  console.log('Email: chinardeshpande@gmail.com\n');

  const newPassword = await question('Enter NEW password: ');

  if (!newPassword || newPassword.length < 8) {
    console.log('\n❌ Password must be at least 8 characters!');
    rl.close();
    return;
  }

  const confirm = await question('Confirm NEW password: ');

  if (newPassword !== confirm) {
    console.log('\n❌ Passwords do not match!');
    rl.close();
    return;
  }

  console.log('\n⏳ Updating password...');

  // Generate hash
  const passwordHash = await bcrypt.hash(newPassword, 12);

  // Update in database
  const { data, error } = await supabase
    .from('admin_users')
    .update({ password_hash: passwordHash })
    .eq('email', 'chinardeshpande@gmail.com')
    .select();

  if (error) {
    console.log('\n❌ Error updating password:', error.message);
  } else {
    console.log('\n✅ Password updated successfully!');
    console.log('\nNew credentials:');
    console.log('   Email: chinardeshpande@gmail.com');
    console.log('   Password: [your new password]');
  }

  rl.close();
}

changePassword().catch((err) => {
  console.error('\n❌ Error:', err.message);
  rl.close();
});
