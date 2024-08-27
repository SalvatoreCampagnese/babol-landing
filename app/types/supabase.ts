Need to install the following packages:
  supabase@1.190.0
Ok to proceed? (y) export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      babol_categories: {
        Row: {
          created_at: string
          default_widgets: Json | null
          emoji: string | null
          id: number
          name: string | null
          visible: boolean | null
        }
        Insert: {
          created_at?: string
          default_widgets?: Json | null
          emoji?: string | null
          id?: number
          name?: string | null
          visible?: boolean | null
        }
        Update: {
          created_at?: string
          default_widgets?: Json | null
          emoji?: string | null
          id?: number
          name?: string | null
          visible?: boolean | null
        }
        Relationships: []
      }
      babol_partecipants: {
        Row: {
          babolID: number | null
          created_at: string
          id: number
          profileID: number | null
          role: Database["public"]["Enums"]["BABOL_ROLES"] | null
        }
        Insert: {
          babolID?: number | null
          created_at?: string
          id?: number
          profileID?: number | null
          role?: Database["public"]["Enums"]["BABOL_ROLES"] | null
        }
        Update: {
          babolID?: number | null
          created_at?: string
          id?: number
          profileID?: number | null
          role?: Database["public"]["Enums"]["BABOL_ROLES"] | null
        }
        Relationships: [
          {
            foreignKeyName: "bubble_partecipants_bubbleID_fkey"
            columns: ["babolID"]
            isOneToOne: false
            referencedRelation: "babols"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bubble_partecipants_profileID_fkey"
            columns: ["profileID"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      babol_tickets: {
        Row: {
          babol_id: number
          created_at: string
          id: number
          profile_id: number
          quantity: number | null
          status: Database["public"]["Enums"]["TICKET_STATUS"] | null
          ticket_code: string | null
          ticketvariant_id: number | null
          total_amount: number | null
          validation_date: string | null
        }
        Insert: {
          babol_id: number
          created_at?: string
          id?: number
          profile_id: number
          quantity?: number | null
          status?: Database["public"]["Enums"]["TICKET_STATUS"] | null
          ticket_code?: string | null
          ticketvariant_id?: number | null
          total_amount?: number | null
          validation_date?: string | null
        }
        Update: {
          babol_id?: number
          created_at?: string
          id?: number
          profile_id?: number
          quantity?: number | null
          status?: Database["public"]["Enums"]["TICKET_STATUS"] | null
          ticket_code?: string | null
          ticketvariant_id?: number | null
          total_amount?: number | null
          validation_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "babol_tickets_babol_id_fkey"
            columns: ["babol_id"]
            isOneToOne: false
            referencedRelation: "babols"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "babol_tickets_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "babol_tickets_ticketvariant_id_fkey"
            columns: ["ticketvariant_id"]
            isOneToOne: false
            referencedRelation: "babol_tickets_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      babol_tickets_variants: {
        Row: {
          babol_id: number | null
          created_at: string
          deleted: boolean | null
          description: string | null
          id: number
          name: string | null
          price: number | null
          valid_from: string | null
          valid_to: string | null
        }
        Insert: {
          babol_id?: number | null
          created_at?: string
          deleted?: boolean | null
          description?: string | null
          id?: number
          name?: string | null
          price?: number | null
          valid_from?: string | null
          valid_to?: string | null
        }
        Update: {
          babol_id?: number | null
          created_at?: string
          deleted?: boolean | null
          description?: string | null
          id?: number
          name?: string | null
          price?: number | null
          valid_from?: string | null
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "babol_tickets_variants_babol_id_fkey"
            columns: ["babol_id"]
            isOneToOne: false
            referencedRelation: "babols"
            referencedColumns: ["id"]
          },
        ]
      }
      babol_widgets: {
        Row: {
          babolID: number | null
          created_at: string
          custom_config: Json | null
          dimension: Json | null
          id: number
          position: Json | null
          widgetID: number | null
        }
        Insert: {
          babolID?: number | null
          created_at?: string
          custom_config?: Json | null
          dimension?: Json | null
          id?: number
          position?: Json | null
          widgetID?: number | null
        }
        Update: {
          babolID?: number | null
          created_at?: string
          custom_config?: Json | null
          dimension?: Json | null
          id?: number
          position?: Json | null
          widgetID?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bubble_widgets_bubbleID_fkey"
            columns: ["babolID"]
            isOneToOne: false
            referencedRelation: "babols"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bubble_widgets_widgetID_fkey"
            columns: ["widgetID"]
            isOneToOne: false
            referencedRelation: "widgets"
            referencedColumns: ["id"]
          },
        ]
      }
      babols: {
        Row: {
          category: number | null
          configs: Json | null
          created_at: string
          creator_id: number | null
          description: string | null
          from_date: string | null
          id: number
          invite_code: string | null
          max_partecipants: number | null
          name: string | null
          password: string | null
          status: string | null
          ticket_enabled: boolean | null
          to_date: string | null
          updated_at: string | null
        }
        Insert: {
          category?: number | null
          configs?: Json | null
          created_at?: string
          creator_id?: number | null
          description?: string | null
          from_date?: string | null
          id?: number
          invite_code?: string | null
          max_partecipants?: number | null
          name?: string | null
          password?: string | null
          status?: string | null
          ticket_enabled?: boolean | null
          to_date?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: number | null
          configs?: Json | null
          created_at?: string
          creator_id?: number | null
          description?: string | null
          from_date?: string | null
          id?: number
          invite_code?: string | null
          max_partecipants?: number | null
          name?: string | null
          password?: string | null
          status?: string | null
          ticket_enabled?: boolean | null
          to_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bubbles_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_babols_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "babol_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      email_newsletter: {
        Row: {
          created_at: string
          email: string | null
          id: number
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
        }
        Relationships: []
      }
      gallery_photos: {
        Row: {
          babolID: number | null
          created_at: string
          id: number
          isDeleted: boolean | null
          photoUrl: string | null
          userID: number | null
        }
        Insert: {
          babolID?: number | null
          created_at?: string
          id?: number
          isDeleted?: boolean | null
          photoUrl?: string | null
          userID?: number | null
        }
        Update: {
          babolID?: number | null
          created_at?: string
          id?: number
          isDeleted?: boolean | null
          photoUrl?: string | null
          userID?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "gallery_photos_babolID_fkey"
            columns: ["babolID"]
            isOneToOne: false
            referencedRelation: "babols"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gallery_photos_userID_fkey"
            columns: ["userID"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      gallery_photos_like: {
        Row: {
          created_at: string
          id: number
          photoID: number | null
          userID: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          photoID?: number | null
          userID?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          photoID?: number | null
          userID?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "gallery_photos_like_photoID_fkey"
            columns: ["photoID"]
            isOneToOne: false
            referencedRelation: "gallery_photos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gallery_photos_like_userID_fkey"
            columns: ["userID"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          babol_id: number | null
          created_at: string
          custom_data: Json | null
          id: number
          read: boolean | null
          receiver_id: number | null
          sender_id: number | null
          sent: boolean | null
          type: Database["public"]["Enums"]["NOTIFICATION_TYPE"] | null
        }
        Insert: {
          babol_id?: number | null
          created_at?: string
          custom_data?: Json | null
          id?: number
          read?: boolean | null
          receiver_id?: number | null
          sender_id?: number | null
          sent?: boolean | null
          type?: Database["public"]["Enums"]["NOTIFICATION_TYPE"] | null
        }
        Update: {
          babol_id?: number | null
          created_at?: string
          custom_data?: Json | null
          id?: number
          read?: boolean | null
          receiver_id?: number | null
          sender_id?: number | null
          sent?: boolean | null
          type?: Database["public"]["Enums"]["NOTIFICATION_TYPE"] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_notifications_babol_id_fkey"
            columns: ["babol_id"]
            isOneToOne: false
            referencedRelation: "babols"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_notifications_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_notifications_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          apple: boolean | null
          avatar_url: string | null
          bio: string | null
          birth_date: string | null
          created_at: string
          deleted: boolean | null
          deleted_date: string | null
          email: string | null
          expo_token: string | null
          first_name: string | null
          full_name: string | null
          gender: string | null
          google: boolean | null
          id: number
          initialized: boolean | null
          last_name: string | null
          password_changed: boolean | null
          updated_at: string | null
          uuid: string | null
        }
        Insert: {
          apple?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          birth_date?: string | null
          created_at?: string
          deleted?: boolean | null
          deleted_date?: string | null
          email?: string | null
          expo_token?: string | null
          first_name?: string | null
          full_name?: string | null
          gender?: string | null
          google?: boolean | null
          id?: number
          initialized?: boolean | null
          last_name?: string | null
          password_changed?: boolean | null
          updated_at?: string | null
          uuid?: string | null
        }
        Update: {
          apple?: boolean | null
          avatar_url?: string | null
          bio?: string | null
          birth_date?: string | null
          created_at?: string
          deleted?: boolean | null
          deleted_date?: string | null
          email?: string | null
          expo_token?: string | null
          first_name?: string | null
          full_name?: string | null
          gender?: string | null
          google?: boolean | null
          id?: number
          initialized?: boolean | null
          last_name?: string | null
          password_changed?: boolean | null
          updated_at?: string | null
          uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_uuid_fkey"
            columns: ["uuid"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          id: number
          message: string | null
          type: Database["public"]["Enums"]["REPORT_TYPES"] | null
          user: number
        }
        Insert: {
          id?: number
          message?: string | null
          type?: Database["public"]["Enums"]["REPORT_TYPES"] | null
          user: number
        }
        Update: {
          id?: number
          message?: string | null
          type?: Database["public"]["Enums"]["REPORT_TYPES"] | null
          user?: number
        }
        Relationships: [
          {
            foreignKeyName: "reports_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: string | null
          created_at: string
          currency: string | null
          id: number
          offer_code: string | null
          product_name: string | null
          status: Database["public"]["Enums"]["TRANSACTION_STATUS"] | null
          transaction_id: string | null
          updated_at: string | null
          user_id: number | null
          webhook_event: Json | null
        }
        Insert: {
          amount?: string | null
          created_at?: string
          currency?: string | null
          id?: number
          offer_code?: string | null
          product_name?: string | null
          status?: Database["public"]["Enums"]["TRANSACTION_STATUS"] | null
          transaction_id?: string | null
          updated_at?: string | null
          user_id?: number | null
          webhook_event?: Json | null
        }
        Update: {
          amount?: string | null
          created_at?: string
          currency?: string | null
          id?: number
          offer_code?: string | null
          product_name?: string | null
          status?: Database["public"]["Enums"]["TRANSACTION_STATUS"] | null
          transaction_id?: string | null
          updated_at?: string | null
          user_id?: number | null
          webhook_event?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      widgets: {
        Row: {
          available: boolean | null
          available_sizes: Json | null
          created_at: string
          deletable: boolean | null
          editable: boolean | null
          id: number
          name: string | null
        }
        Insert: {
          available?: boolean | null
          available_sizes?: Json | null
          created_at?: string
          deletable?: boolean | null
          editable?: boolean | null
          id?: number
          name?: string | null
        }
        Update: {
          available?: boolean | null
          available_sizes?: Json | null
          created_at?: string
          deletable?: boolean | null
          editable?: boolean | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      babols_details_home: {
        Args: {
          profile_id: number
        }
        Returns: {
          id: number
          name: string
          description: string
          category: number
          from_date: string
          to_date: string
          updated_at: string
          created_at: string
          creator_id: number
          status: string
          invite_code: string
          password: string
          configs: Json
          ticket_enabled: boolean
          max_partecipants: number
          full_category: unknown
          members_count: number
          members_uuid: string[]
          user_role: Database["public"]["Enums"]["BABOL_ROLES"]
        }[]
      }
      events_in_distance: {
        Args: {
          min_lat: number
          min_long: number
          distance: number
        }
        Returns: {
          id: number
          lat: number
          long: number
          name: string
        }[]
      }
      verify_user_password: {
        Args: {
          password: string
        }
        Returns: boolean
      }
    }
    Enums: {
      BABOL_ROLES: "0" | "1" | "2"
      NOTIFICATION_TYPE:
        | "photo_added"
        | "admin_removed"
        | "admin_added"
        | "member_removed"
        | "babol_deleted"
      REPORT_TYPES: "bug" | "feedback" | "suggestion"
      TICKET_STATUS: "pending" | "declined" | "accepted"
      TRANSACTION_STATUS: "pending" | "processed" | "declined" | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
