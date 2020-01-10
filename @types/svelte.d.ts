declare module "*.svelte" {
  interface ComponentOptions<Props> {
    anchor?: HTMLElement | null;
    hydrate?: boolean;
    intro?: boolean;
    props?: Props;
    target: HTMLElement;
  }

  interface Component<Props> {
    new (options: ComponentOptions<Props>): any; // eslint-disable-line @typescript-eslint/no-explicit-any

    $set(props: {}): void;
    $on(event: string, callback: (event: CustomEvent) => void): void;
    $destroy(): void;

    render(props?: {}): {
      css: { code: string; map: string | null };
      head?: string;
      html: string;
    };
  }

  const component: Component<{}>;
  export default component;
}
