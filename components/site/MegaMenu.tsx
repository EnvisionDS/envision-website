import Icon from "./Icon";
import { GROUPS, MENU_FOOT, MENU_TITLE } from "@/lib/menu";
import { SERVICE_BY_KEY } from "@/lib/services";

// The Services mega menu: four columns, one per group, each in its own colour (mega.css). It opens on hover or keyboard
// focus of the Services link (lib/client/mega.js). Each group's heading and Explore link go to its category page.
export default function MegaMenu({ onHome = false }: { onHome?: boolean }) {
  const home = onHome ? "" : "/";
  return (
    <div className="nav-drop mega" id="navDrop" aria-label="Services">
      <p className="mg-ey">{MENU_TITLE}</p>
      <div className="mg-cols">
        {GROUPS.map((g) => (
          <div className="mg-col" style={{ "--c": g.color }} key={g.id}>
            <p className="mg-h">
              <a href={g.href}>
                <Icon>{g.icon}</Icon>
                {g.name}
              </a>
            </p>
            <ul>
              {g.items.map((key) => {
                const s = SERVICE_BY_KEY[key];
                return (
                  <li key={key}>
                    <a href={s.href}>
                      <Icon>{s.icon}</Icon>
                      {s.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a className="mg-ex" href={g.href}>
              {`${g.explore} `}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
      <div className="mg-foot">
        <span>{MENU_FOOT.text}</span>
        <a href={`${home}#${MENU_FOOT.anchor}`}>
          {`${MENU_FOOT.link} `}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
