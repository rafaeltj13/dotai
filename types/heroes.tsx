export interface HeroStats {
  id: number;
  name: string;
  localized_name: string;
  img?: string;
  icon: string;
  pro_win: number;
  pro_pick: number;
  hero_id: number;
  pro_ban: number;
  primary_attr: string;
  roles: Array<string>;
}
