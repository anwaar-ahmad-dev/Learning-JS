fetch('https://randomuser.me/api/?results=5')
  .then((response) => response.json())
  .then((data) => data.results.forEach((user) => createUserCard(user)))
  .catch((err) => console.log(err));

// function to create card...
function createUserCard(user) {
  // Main card container
  const card = document.createElement('div');
  card.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6';

  // Card content wrapper
  const cardContent = document.createElement('div');
  cardContent.className = 'flex items-center gap-6';

  // ── Avatar ──────────────────────────────────────────
  const avatarWrapper = document.createElement('div');
  avatarWrapper.className = 'flex-shrink-0';

  const avatar = document.createElement('img');
  avatar.src = user.picture.large;
  avatar.alt = 'Avatar';
  avatar.className = 'w-24 h-24 rounded-full border-4 border-blue-500';

  avatarWrapper.appendChild(avatar);

  // ── User Info ────────────────────────────────────────
  const userInfo = document.createElement('div');
  userInfo.className = 'flex-1';

  const name = document.createElement('h3');
  name.className = 'text-xl font-bold text-gray-800 dark:text-white mb-3';
  name.textContent = user.name.first;

  const emailPara = document.createElement('p');
  emailPara.className = 'text-sm text-gray-600 dark:text-gray-300 mb-2';

  const emailLabel = document.createElement('span');
  emailLabel.className = 'font-semibold';
  emailLabel.textContent = 'Email: ';

  emailPara.appendChild(emailLabel);
  emailPara.append(user.email);

  const phonePara = document.createElement('p');
  phonePara.className = 'text-sm text-gray-600 dark:text-gray-300';

  const phoneLabel = document.createElement('span');
  phoneLabel.className = 'font-semibold';
  phoneLabel.textContent = 'Phone: ';

  phonePara.appendChild(phoneLabel);
  phonePara.append(user.cell);

  userInfo.appendChild(name);
  userInfo.appendChild(emailPara);
  userInfo.appendChild(phonePara);

  // ── Assemble ─────────────────────────────────────────
  cardContent.appendChild(avatarWrapper);
  cardContent.appendChild(userInfo);
  card.appendChild(cardContent);

  // ── Mount ─────────────────────────────────────────────
  document.querySelector('.card-container').appendChild(card);
}
