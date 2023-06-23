import { Menu } from '@headlessui/react';

function OptionsMenu() {
  return (
      <Menu className="relative">
          <div>
          <Menu.Button className="btn-primary btn">Menu</Menu.Button>
          <Menu.Items className="absolute top-[60px] z-50 right-0 mt-2 rounded bg-white shadow-md">
            <Menu.Item>
              <a className="block px-4 py-2" href="#">
                Home
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className="block px-4 py-2" href="#">
                About
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className="block px-4 py-2" href="#">
                Contact
              </a>
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
  );
}

export default OptionsMenu;
