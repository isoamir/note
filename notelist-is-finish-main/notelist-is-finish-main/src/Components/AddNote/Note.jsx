import React from "react";

function Note({ data, onDelete, onDone }) {
  return (
    <div className={data.isfinished ? "note-2" : "note-1"}>
      {/*
       */}
      <h1 className="titel1">{data.title}</h1>
      <p className="des1">{data.des}</p>
      <div className="Buttons">
        <button
          type="button"
          id="Delete"
          className="delet"
          onClick={() => onDelete(data.id)}
        >
          {}
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15L10 12"
              stroke="#ffffff"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M14 15L14 12"
              stroke="#ffffff"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M3 7H21C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7Z"
              fill="#7E869E"
              fill-opacity="0.25"
              stroke="#ffffff"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
              stroke="#ffffff"
              stroke-width="1.2"
              stroke-linecap="round"
            />
          </svg>
          Delete
        </button>
        <button type="button" className="Edit">
          {" "}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.92971 19.283L5.92972 19.283L5.95149 19.2775L5.95151 19.2775L8.58384 18.6194C8.59896 18.6156 8.61396 18.6119 8.62885 18.6082C8.85159 18.5528 9.04877 18.5037 9.2278 18.4023C9.40683 18.301 9.55035 18.1571 9.71248 17.9947C9.72332 17.9838 9.73425 17.9729 9.74527 17.9618L16.9393 10.7678L16.9393 10.7678L16.9626 10.7445C17.2761 10.4311 17.5461 10.1611 17.7333 9.91573C17.9339 9.65281 18.0858 9.36038 18.0858 9C18.0858 8.63961 17.9339 8.34719 17.7333 8.08427C17.5461 7.83894 17.276 7.5689 16.9626 7.2555L16.9393 7.23223L16.5858 7.58579L16.9393 7.23223L16.7678 7.06066L16.7445 7.03738C16.4311 6.72395 16.1611 6.45388 15.9157 6.2667C15.6528 6.0661 15.3604 5.91421 15 5.91421C14.6396 5.91421 14.3472 6.0661 14.0843 6.2667C13.8389 6.45388 13.5689 6.72395 13.2555 7.03739L13.2322 7.06066L6.03816 14.2547C6.02714 14.2658 6.01619 14.2767 6.00533 14.2875C5.84286 14.4496 5.69903 14.5932 5.59766 14.7722C5.4963 14.9512 5.44723 15.1484 5.39179 15.3711C5.38809 15.386 5.38435 15.401 5.38057 15.4162L4.71704 18.0703C4.71483 18.0791 4.7126 18.088 4.71036 18.097C4.67112 18.2537 4.62921 18.421 4.61546 18.5615C4.60032 18.7163 4.60385 18.9773 4.81326 19.1867C5.02267 19.3961 5.28373 19.3997 5.43846 19.3845C5.57899 19.3708 5.74633 19.3289 5.90301 19.2896C5.91195 19.2874 5.92085 19.2852 5.92971 19.283Z"
              stroke="#ffffff"
            />
            <path
              d="M12.5 7.5L15.5 5.5L18.5 8.5L16.5 11.5L12.5 7.5Z"
              fill="#ffffff"
            />
          </svg>
          Edit
        </button>
        <div>
          <button className="Done" id="Done" onClick={() => onDone(data.id)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="2" />
              <path d="M8 12L11 15L16 9" stroke="#ffffff" stroke-width="2" />
            </svg>
          </button>
        </div>
        <div className="Time">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z"
              fill="#ffffff"
              fill-opacity="0.25"
            />
            <rect
              x="3"
              y="6"
              width="18"
              height="15"
              rx="2"
              stroke="#ffffff"
              stroke-width="1.2"
            />
            <path
              d="M7 3L7 6"
              stroke="#ffffff"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <path
              d="M17 3L17 6"
              stroke="#ffffff"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <rect x="7" y="12" width="4" height="2" rx="0.5" fill="#ffffff" />
            <rect x="7" y="16" width="4" height="2" rx="0.5" fill="#ffffff" />
            <rect x="13" y="12" width="4" height="2" rx="0.5" fill="#ffffff" />
            <rect x="13" y="16" width="4" height="2" rx="0.5" fill="#ffffff" />
          </svg>

          <h5>{data.createdTime}</h5>
        </div>
      </div>
    </div>
  );
}

export default Note;
