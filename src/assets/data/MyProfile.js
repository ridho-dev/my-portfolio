const myAge = () => {
  let today = new Date();
  // padStart is used to add 0 in front of the number if the number is less than 2
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  const birthDate = new Date('8/27/2001');
  const currentDate = new Date(today);
  const diffTime = Math.abs(currentDate - birthDate);
  const diffDays = Math.ceil((diffTime / (1000 * 60 * 60 * 24)));

  return (
    Math.floor(diffDays / 365)
  )
}

const MyProfile = [
  {
    title: "Name",
    value: "Ridho Pardede",
  },
  {
    title: "Age",
    value: myAge(),
  },
  {
    title: "Address",
    value: "Medan, Indonesia",
  },
  {
    title: "Phone",
    value: "+6281360011808",
  },
  {
    title: "Email",
    value: "ridhopardede9f@gmail.com",
  },
  {
    title: "Freelance",
    value: "Available",
  },
];

export default MyProfile;