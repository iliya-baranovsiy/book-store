import { useProfile } from "../hooks/useBooks";
import ProfileComponent from "../components/profileComponents/profile";

export default function ProfilePage() {
  const { data: response, isLoading } = useProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProfileComponent name={response!.name} email={response!.email} />
    </>
  );
}
