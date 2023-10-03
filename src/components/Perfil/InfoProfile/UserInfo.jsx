import CalculateAge from "@/helpers/CalculateAge";
import { PiGearBold } from "react-icons/pi";
export default function UserInfo({ user, toggleModal }) {
  return (
    <section className="flex flex-col items-start w-full pl-4 py-1 gap-3 font-semibold text-xl">
      <div>
        {user.first_name || user.last_name ? (
          <h4>
            Nombre:{" "}
            <span className="font-normal text-lg">{user.first_name}</span>{" "}
            <span className="font-normal text-lg">{user.last_name}</span>
          </h4>
        ) : (
          <h4>
            Nombre: <span className="font-normal text-lg">-</span>
          </h4>
        )}
        <h4>
          Edad:{" "}
          <span className="font-normal text-lg">
            {CalculateAge(user.birth_date)}
          </span>
        </h4>
        <h4>
          Pais:{" "}
          <span className="font-normal text-lg">{user.country || "-"}</span>
        </h4>
        <h4>
          Ciudad:{" "}
          <span className="font-normal text-lg">{user.city || "-"}</span>
        </h4>
      </div>
      <div className="flex justify-between w-full items-end">
        <div>
          <h4>
            E-mail: <span className="font-normal text-lg">{user.email}</span>
          </h4>
          <h4>
            Telefono:{" "}
            <span className="font-normal text-lg">
              {user.phone_number || "-"}
            </span>
          </h4>
        </div>
        <PiGearBold
          size={30}
          className="cursor-pointer"
          onClick={toggleModal}
        />
      </div>
    </section>
  );
}
