import { defineConfig, UserConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({ command }: { command: string }) => {
    let config = defineConfig({
        base: command === 'build' ? '/react-focus-within-menus/' : '/',
        plugins: [reactRefresh()],
    }) as UserConfig;
    return config;
}
